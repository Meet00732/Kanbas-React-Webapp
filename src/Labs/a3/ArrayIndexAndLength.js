function ArrayIndexAndLength() {
    let array1 = [1, 2, 3, 4, 5];
    const len1 = array1.length;
    const ind1 = array1.indexOf(3);

    return (
        <>
            <h3>Array index and length</h3>
            len1 = { len1 } <br />
            ind1 = { ind1 } <br />
        </>
    )
}

export default ArrayIndexAndLength;