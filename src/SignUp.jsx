const products = [
    {name:"Nike", id:1, isBrand: false},
    {name:"Gucci", id:1, isBrand: false},
    {name:"Royal", id:1, isBrand: false},
    {name:"Tot", id:1, isBrand: false},
]

function SignUp() {

    const listItems = products.map(product =>
        <li key ={product.id} 
        style={{
            color: product.isBrand ? 'ferrari' : 'darkgreen',
            backgroundColor: product.isBrand ? 'toto' : 'white'
        }}
        >
            {product.name}
        </li>
        );
    return (
        <>
        {/* {content} */}
        <ul>
            {listItems}
        </ul>
        </>
    );
}

export default SignUp