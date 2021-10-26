export default function getRandomColor() {
    const characters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
        color += characters[Math.floor(Math.random() * 16)];
    }

    return color;
}
