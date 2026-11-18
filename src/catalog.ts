export type Product = {id:number; name:string; category:string; price:number; old?:number; rating:number; image:string; badge?:string};
export const defaultProducts:Product[] = [
{id:1,name:'Wireless Studio Headphones',category:'electronics',price:499,old:699,rating:4.9,image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',badge:'-29%'},
{id:2,name:'Minimal Everyday Watch',category:'fashion',price:329,old:420,rating:4.8,image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',badge:'Popular'},
{id:3,name:'Premium Desk Lamp',category:'home',price:269,rating:4.7,image:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80'},
{id:4,name:'Skincare Essentials Set',category:'beauty',price:389,old:450,rating:4.9,image:'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800&auto=format&fit=crop&q=80',badge:'New'},
{id:5,name:'Classic Everyday Sneakers',category:'fashion',price:549,rating:4.8,image:'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80'},
{id:6,name:'Compact Digital Camera',category:'electronics',price:1299,old:1599,rating:4.6,image:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80',badge:'-19%'},
{id:7,name:'Coffee Cup & Saucer',category:'home',price:219,rating:4.7,image:'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&auto=format&fit=crop&q=80'},
{id:8,name:'Botanical Face Serum',category:'beauty',price:179,rating:4.8,image:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&auto=format&fit=crop&q=80'}
];
export type CatalogItem=Product & {stock:number};
export const defaultCatalog:CatalogItem[]=defaultProducts.map(p=>({...p,stock:20}));
export function readCatalog():CatalogItem[]{try{const raw=localStorage.getItem('msp-admin-products');if(!raw)return defaultCatalog;const data=JSON.parse(raw);if(!Array.isArray(data))return defaultCatalog;return data.map((p:CatalogItem)=>{const base=defaultProducts.find(x=>x.id===p.id);return {...base,...p,image:p.image||base?.image||'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80',rating:p.rating||base?.rating||4.8,stock:Number.isFinite(p.stock)?p.stock:0}})}catch{return defaultCatalog}}
