export default function jumpCharacter({classList, style}) {
    /* 현재 점프중이면 리턴 */
    if (classList.contains('jumpright') || classList.contains('jumpleft'))
        return;

    /* 점프 */
    if (style.transform === 'scaleX(1)')
        classList.add('jumpright');
    else 
        classList.add('jumpleft');

    /* 착지 */
    setTimeout(() => {
        classList.remove('jumpright', 'jumpleft');
    }, 1000);
}