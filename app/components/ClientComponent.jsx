"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const ClientComponent = () => {
  useEffect(() => {
    const body = document.body;

    const loginBtn = document.getElementById("login-button");
    const cursorBtn = document.getElementById("button-cursor");
    const mainBtn = document.getElementById("button-main");

    const startBtn = document.getElementById("start-btn");
    const startCursor = document.getElementById("start-btn-cursor");
    const startMain = document.getElementById("start-main");

    const readBtn = document.getElementById("read-btn");
    const readCursor = document.getElementById("read-btn-cursor");
    const readMain = document.getElementById("read-main");

    // startCursor.style.display = "block";
    // readCursor.style.display = "block";
    
    const handleMouseMove = (e) => {
      
      const offsetX = 10;
      const offsetY = 10;
      const xBtnoffset = 100;
      const yBtnoffset = 40;
      const x = e.clientX + window.scrollX - offsetX;
      const y = e.clientY + window.scrollY - offsetY;
      const xBtn = x - (window.innerWidth - xBtnoffset);
      const yBtn = y - yBtnoffset;
      const xBtncuroff = 786 + 50;
      const yBtncuroff = 331;
      const xBtncur = x - (window.innerWidth - xBtncuroff);
      const yBtncur = y - yBtncuroff;
      // startCursor.style.width = "5rem";
      // readCursor.style.width = "5rem";
      if (startCursor && readCursor) {
        startCursor.style.width = "5rem";
        readCursor.style.width = "5rem";
      }

      gsap.to(".cursor", {
        x: x,
        y: y,
        duration: 0.5,
        ease: "power.inout(1, 0.3)",
        transformOrigin: "center",
      });

      if (cursorBtn) {
        gsap.to(cursorBtn, {
          x: xBtn,
          y: yBtn,
          duration: 0.5,
          ease: "power.inout(1, 0.3)",
          transformOrigin: "center",
        });
      }

      if (startCursor) {
        gsap.to(startCursor, {
          x: xBtncur,
          y: yBtncur,
          duration: 0.5,
          ease: "power.inout(1, 0.3)",
          transformOrigin: "center",
        });
      }

      if (readCursor) {
        gsap.to(readCursor, {
          x: xBtncur - 100,
          y: yBtncur,
          duration: 0.5,
          ease: "power.inout(1, 0.3)",
          transformOrigin: "center",
        });
      }
    };

    const detectMouseEntryDirection = (e, rect) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const topDistance = Math.abs(mouseY - rect.top);
      const bottomDistance = Math.abs(mouseY - rect.bottom);
      const leftDistance = Math.abs(mouseX - rect.left);
      const rightDistance = Math.abs(mouseX - rect.right);

      const minDistance = Math.min(topDistance, bottomDistance, leftDistance, rightDistance);
      if (minDistance === topDistance) {
        return "top";
      } else if (minDistance === bottomDistance) {
        return "bottom";
      } else if (minDistance === leftDistance) {
        return "left";
      } else {
        return "right";
      }
    };

    if (loginBtn && cursorBtn && mainBtn) {
      loginBtn.addEventListener("mouseover", (e) => {
        const rect = loginBtn.getBoundingClientRect();
        const entryDirection = detectMouseEntryDirection(e, rect);

        let xShift = 0;
        let yShift = 0;

        if (entryDirection === "top") {
          yShift = 50;
        } else if (entryDirection === "bottom") {
          yShift = -50;
        } else if (entryDirection === "left") {
          xShift = 50;
        } else if (entryDirection === "right") {
          xShift = -50; 
        }

        gsap.to(mainBtn, {
          x: xShift,
          y: yShift,
          duration: 0.5,
          opacity: 0,
        });

        loginBtn.style.borderColor = "white";
        cursorBtn.style.display = "flex";
      });

      loginBtn.addEventListener("mouseleave", () => {

        gsap.to(mainBtn, {
          x: 0,
          y: 0,
          duration: 0.5,
          opacity: 1,
        });

        loginBtn.style.borderColor = "#ffffff";
        cursorBtn.style.display = "none";
      });
    }

    if (body) {
      body.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (body) {
        body.removeEventListener("mousemove", handleMouseMove);
      }
      if (loginBtn) {
        loginBtn.removeEventListener("mouseover", handleMouseMove);
        loginBtn.removeEventListener("mouseleave", handleMouseMove);
      }
      if (startBtn) {
        startBtn.removeEventListener("mouseover", handleMouseMove);
        startBtn.removeEventListener("mouseleave", handleMouseMove);
      }
    };
  }, []);

  return (
    <>
      <div className="absolute cursor h-[20px] w-[20px] z-[999] rounded-full top-0  bg-white"></div>
    </>
  );
};

export default ClientComponent;
