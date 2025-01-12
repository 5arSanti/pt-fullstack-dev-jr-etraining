const scrollToValue = (xValue: number = 0, yValue: number = 0, delay: number = 0) => {
    setTimeout(() => {
        document.documentElement.scrollTo(xValue, yValue)
    }, delay);
}

export { scrollToValue }; 