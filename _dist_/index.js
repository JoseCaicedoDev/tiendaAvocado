/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const url = 'https://platzi-avo.vercel.app/api/avo';

const appNode = document.querySelector('#app');

appNode.addEventListener('click', (e)=>{
  if(e.target.nodeName === 'H2'){
    window.alert('Hola')
  }
})

const formatPrice = (price) =>{
  const newPrice = new window.Intl.NumberFormat('en-EN',{
    style: 'currency',
    currency: 'USD'
  }).format(price)
 return newPrice;
}
//web api
//conectarnos al server
window
  .fetch(url)
//procesar la respuesta, y convertirla en JSON
  .then((respuesta) => respuesta.json())
//JSON -> Data -> renderizar info browser
  .then((responseJson) =>{
    const allItems = []
/*     let i =0; */
    responseJson.data.forEach((item)=>{
      const imagen = document.createElement('img');
      imagen.src = `https://platzi-avo.vercel.app${item.image}`;
      imagen.alt = item.name;
      const title = document.createElement('h2');
      title.textContent = item.name;
      title.className = 'text-2xl font-bold text-gray-900';
      const price = document.createElement('p');
      price.textContent = formatPrice(item.price);
      price.className = 'text-lg text-red-500';

      const container = document.createElement('div');
      container.append(imagen, title, price);
      allItems.push(container);
      container.className = 'max-w-sm bg-white shadow-xl rounded-lg p-5';
/*       console.log(`${i++}.- ${item.name}`) */
    });
    appNode.append(...allItems);
  });