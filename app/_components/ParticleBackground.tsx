"use client";
import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5Ref = useRef<any>(null);

  useEffect(() => {
    const initP5 = async () => {
      const p5 = (await import("p5")).default;

      const sketch = (p: any) => {
        let particles: any[] = [];
        let textPositions: any[] = [];
        let flowParticles: any[] = [];
        let font: any;
        let mouseMovedTime = 0;

        p.preload = () => {
          font = p.loadFont(
            "https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Regular.otf"
          );
        };

        p.setup = () => {
          const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
          canvas.parent(containerRef.current!);
          p.background(0);

          generateTextPositions("");

          let totalParticles = 10000;
          for (let i = 0; i < totalParticles; i++) {
            let particle = new Particle(p.random(p.width), p.random(p.height));
            if (i < textPositions.length) {
              particle.target = textPositions[i];
            } else {
              flowParticles.push(particle);
            }
            particles.push(particle);
          }
        };

        p.draw = () => {
          p.background("#011c61");

          let mouseStopped = p.millis() - mouseMovedTime > 1000;

          particles.forEach((particle, index) => {
            if (particle.target && mouseStopped) {
              particle.seek(particle.target);
            } else {
              particle.murmur(p.mouseX, p.mouseY);
            }
            particle.update();
            particle.show();
          });
        };

        p.mouseMoved = () => {
          mouseMovedTime = p.millis();
        };

        function generateTextPositions(word: string) {
          textPositions = [];
          let pg = p.createGraphics(p.width, p.height);
          pg.pixelDensity(1);
          pg.background(0);
          pg.textFont(font);
          pg.textSize(140);
          pg.fill(255);
          pg.textAlign(p.CENTER, p.CENTER);
          pg.text(word, p.width / 2, p.height / 2);
          pg.loadPixels();

          for (let x = 0; x < p.width; x += 5) {
            for (let y = 0; y < p.height; y += 5) {
              let index = (x + y * p.width) * 4;
              if (pg.pixels[index] > 200) {
                textPositions.push(p.createVector(x, y));
              }
            }
          }
        }

        class Particle {
          pos: any;
          vel: any;
          acc: any;
          maxSpeed: number;
          target: any;

          constructor(x: number, y: number) {
            this.pos = p.createVector(x, y);
            this.vel = p5.Vector.random2D();
            this.acc = p.createVector();
            this.maxSpeed = 6;
            this.target = null;
          }

          update() {
            this.vel.add(this.acc);
            this.vel.limit(this.maxSpeed);
            this.pos.add(this.vel);
            this.acc.mult(0);
          }

          applyForce(force: any) {
            this.acc.add(force);
          }

          murmur(mx: number, my: number) {
            let mouse = p.createVector(mx, my);
            let angle =
              p.noise(
                this.pos.x * 0.005,
                this.pos.y * 0.005,
                p.frameCount * 0.005
              ) *
              p.TWO_PI *
              4;
            let flowDir = p5.Vector.fromAngle(angle);

            let mouseDir = p5.Vector.sub(mouse, this.pos);
            let mouseDist = mouseDir.mag();

            mouseDir.normalize();

            if (mouseDist < 120) {
              mouseDir.mult(-0.5);
            } else {
              mouseDir.mult(0.5);
            }

            flowDir.mult(0.5);

            this.applyForce(mouseDir);
            this.applyForce(flowDir);
          }

          seek(target: any) {
            let desired = p5.Vector.sub(target, this.pos);
            let d = desired.mag();
            desired.setMag(p.map(d, 0, 100, 0, this.maxSpeed));
            let steer = p5.Vector.sub(desired, this.vel);
            steer.limit(0.2);
            this.applyForce(steer);
          }

          show() {
            p.noStroke();
            p.fill(162, 196, 235);
            p.rectMode(p.CENTER);
            p.rect(this.pos.x, this.pos.y, 3, 3);
          }
        }

        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
          generateTextPositions("");

          particles.forEach((p, i) => {
            if (i < textPositions.length) {
              p.target = textPositions[i];
            } else {
              p.target = null;
            }
          });
        };
      };

      p5Ref.current = new p5(sketch);
    };

    initP5();

    return () => {
      if (p5Ref.current) {
        p5Ref.current.remove();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full  object-cover z-0 h-screen overflow-hidden "
    />
  );
};

export default ParticleBackground;
