export const formatPrice = (num) => {
    return new Intl.NumberFormat('de-DE',
        { style: 'decimal', currency: 'VND' })
        .format(num)
}