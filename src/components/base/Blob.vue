<template>
  <div class="blob"></div>
</template>

<style scoped>
.blob {
  position: absolute;
  background: linear-gradient(
    45deg,
    rgba(0, 238, 1, 0.1),
    rgba(255, 255, 255, 0.1)
  );
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: morph 8s ease-in-out infinite, move 15s ease-in-out infinite;
  z-index: -1;
  filter: blur(20px);
  transform: translateZ(0); /* Promotes the element to its own rendering layer */
}

@keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}

@keyframes move {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(50px, -50px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
