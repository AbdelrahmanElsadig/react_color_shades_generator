import Color from 'color';
const getShades = (colors: string[], inputColor: string): string[] => {
    let shades = [];
    try {
        for (let i = 10; i >= 0; i--) {
            let shade = Color(inputColor).lightness(i * 10).hex();
            shades.push(shade);
        };
        return shades
    }
    catch (error) {
        alert('Invalid CSS Color Format!')
        return colors
    }
}


export { getShades }