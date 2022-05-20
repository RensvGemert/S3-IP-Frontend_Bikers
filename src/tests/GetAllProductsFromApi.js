export async function GetAllProductsFromApi()
{
    
   const response = await fetch("http://localhost:8080/api/products")   
            
   const data = await response.json().catch(error => console.log(error));
          
   return data;  
}