// http module require

const http = require('http')
const { url } = require('inspector')

// Sample products for men
const menProducts = [
    {
      id: 1,
      name: 'Men Product 1',
      brand: 'Brand A',
      price: 50.99,
      color: 'Blue',
      size: 'M',
      category: 'Men',
    },
    {
      id: 2,
      name: 'Men Product 2',
      brand: 'Brand B',
      price: 35.75,
      color: 'Black',
      size: 'L',
      category: 'Men',
    },
    {
      id: 3,
      name: 'Men Product 3',
      brand: 'Brand C',
      price: 65.00,
      color: 'Gray',
      size: 'XL',
      category: 'Men',
    },
    {
      id: 4,
      name: 'Men Product 4',
      brand: 'Brand D',
      price: 40.50,
      color: 'Green',
      size: 'S',
      category: 'Men',
    },
    {
      id: 5,
      name: 'Men Product 5',
      brand: 'Brand E',
      price: 55.25,
      color: 'Brown',
      size: 'M',
      category: 'Men',
    },
    {
      id: 6,
      name: 'Men Product 6',
      brand: 'Brand F',
      price: 75.00,
      color: 'Red',
      size: 'L',
      category: 'Men',
    },
    {
      id: 7,
      name: 'Men Product 7',
      brand: 'Brand G',
      price: 30.99,
      color: 'White',
      size: 'M',
      category: 'Men',
    },
    {
      id: 8,
      name: 'Men Product 8',
      brand: 'Brand H',
      price: 48.50,
      color: 'Navy Blue',
      size: 'L',
      category: 'Men',
    },
    {
      id: 9,
      name: 'Men Product 9',
      brand: 'Brand I',
      price: 42.75,
      color: 'Orange',
      size: 'XL',
      category: 'Men',
    },
    {
      id: 10,
      name: 'Men Product 10',
      brand: 'Brand J',
      price: 60.00,
      color: 'Black',
      size: 'S',
      category: 'Men',
    },
  ];

// Sample Products For women
const womenProducts = [
    {
      id: 1,
      name: 'Women Product 1',
      brand: 'Brand X',
      price: 45.25,
      color: 'Red',
      size: 'S',
      category: 'Women',
    },
    {
      id: 2,
      name: 'Women Product 2',
      brand: 'Brand Y',
      price: 60.00,
      color: 'Pink',
      size: 'M',
      category: 'Women',
    },
    {
      id: 3,
      name: 'Women Product 3',
      brand: 'Brand Z',
      price: 35.50,
      color: 'White',
      size: 'L',
      category: 'Women',
    },
    {
      id: 4,
      name: 'Women Product 4',
      brand: 'Brand A',
      price: 50.99,
      color: 'Black',
      size: 'S',
      category: 'Women',
    },
    {
      id: 5,
      name: 'Women Product 5',
      brand: 'Brand B',
      price: 75.25,
      color: 'Blue',
      size: 'M',
      category: 'Women',
    },
    {
      id: 6,
      name: 'Women Product 6',
      brand: 'Brand C',
      price: 40.00,
      color: 'Green',
      size: 'L',
      category: 'Women',
    },
    {
      id: 7,
      name: 'Women Product 7',
      brand: 'Brand D',
      price: 55.99,
      color: 'Purple',
      size: 'XL',
      category: 'Women',
    },
    {
      id: 8,
      name: 'Women Product 8',
      brand: 'Brand E',
      price: 65.50,
      color: 'Yellow',
      size: 'S',
      category: 'Women',
    },
    {
      id: 9,
      name: 'Women Product 9',
      brand: 'Brand F',
      price: 48.75,
      color: 'Orange',
      size: 'M',
      category: 'Women',
    },
    {
      id: 10,
      name: 'Women Product 10',
      brand: 'Brand G',
      price: 70.00,
      color: 'Brown',
      size: 'L',
      category: 'Women',
    },
  ];
  

const PORT = 3000;

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader("Content-type","text/plain");
        res.end(`Welcome to Men and Women Dummy Data`)
    } else if(req.url == '/men'){
        res.statusCode = 200;
        res.setHeader("Content-type","text/JSON");
        res.end(JSON.stringify(menProducts))
    } else if(req.url == '/women'){
        res.statusCode = 200;
        res.setHeader("Content-type","text/JSON");
        res.end(JSON.stringify(womenProducts))
    }else{
        res.statusCode = 400;
        res.setHeader("Content-type","text/plain");
        res.end('Page not found')
    }
})

server.listen(PORT,()=>{
    console.log(`Server is Listening on PORT:${PORT}`);
})