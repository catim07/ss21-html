for (let i = 0; i < 10; i++) {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    console.log(`%c màu sắc được thay đổi`, `color: ${randomColor}`);
}
  