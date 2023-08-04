

export function rectContains ( rect, point) {
    return ( rect.x <= point.x && rect.x + rect.width  >= point.x ) 
        && ( rect.y <= point.y && rect.y + rect.height >= point.y )
}