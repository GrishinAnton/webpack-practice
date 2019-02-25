export default (text = 'Привет! 🎉🎉🎉') => {
    const element = document.createElement('div');

    element.addEventListener('click', async () => {
        element.innerHTML = 'Загрузка...';

        const result = await import('./lazyLoadedText');

        await new Promise((resolve) => setTimeout(resolve, 2000));
    });

    element.innerHTML = text;

    return element;
};
