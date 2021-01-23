export const getParticipantColors = pairs => {
    let assignedColors = {}

    const colorList = [
        '#b9f261',
        '#99b851',
        '#61f2ca',
        '#51b892',
        '#fae058',
        '#ffbf54',
        '#f76865',
        '#bf585e',
        '#41a6f6',
        '#73eff7',
        '#f4f4f4',
        '#94b0c2',
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