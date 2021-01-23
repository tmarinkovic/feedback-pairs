export const getParticipantColors = pairs => {
    let assignedColors = {}

    const colorList = [
        '#b9f261',
        '#f76865',
        '#41a6f6',
        '#fae058',
        '#73eff7',
        '#94b0c2',
        '#99b851',
        '#bf585e',
        '#61f2ca',
        '#51b892',
        '#ffbf54',
        '#f4f4f4',
        '#ffcd75',
        '#38b764',
    ]

    let counter = 0
    pairs.forEach(pair=> {
        pair.forEach(participant=> {
            assignedColors[participant] = colorList[counter]
            counter++
        })
    })
    return assignedColors
}