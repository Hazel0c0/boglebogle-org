export default function attack({offsetTop, offsetLeft, style}) {
    
    makeBubble(offsetTop, offsetLeft, style);
    
}

function makeBubble(offsetTop, offsetLeft, style) {
    const $playGround = document.querySelector('.content');

    const $bubble = document.createElement('div');
    $bubble.classList.add('bubble');
    $bubble.style.position = 'absolute';
    $bubble.style.top = offsetTop + 'px';
    if (style.transform === 'scaleX(1)')
        $bubble.style.left = (offsetLeft - 50) + 'px';
    else
        $bubble.style.left = (offsetLeft + 50) + 'px';
    
    $playGround.appendChild($bubble);
}