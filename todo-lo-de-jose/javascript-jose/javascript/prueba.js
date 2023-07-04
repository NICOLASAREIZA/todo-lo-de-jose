const products = [
    { id: 0, name: "" },
    { id: 1, name: "Café americano", price: 2000 },
    { id: 2, name: "Café con leche", price: 3000 },
  ];
  
  let selectedProduct1 = "";
  let selectedProduct2 = "";
  let quantity1 = 0;
  let quantity2 = 0;
  
  function updateProduct1() {
    const product1 = document.getElementById("product1");
    const index = product1.selectedIndex;
    selectedProduct1 = products[index].name;
    document.getElementById("selectedProduct1").textContent = selectedProduct1;
    updateTotal();
  }
  
  function updateProduct2() {
    const product2 = document.getElementById("product2");
    const index = product2.selectedIndex;
    selectedProduct2 = products[index].name;
    document.getElementById("selectedProduct2").textContent = selectedProduct2;
    updateTotal();
  }
  
  function updateTotal() {
    quantity1 = parseInt(document.getElementById("quantity1").value);
    quantity2 = parseInt(document.getElementById("quantity2").value);
    const subTotal1 = quantity1 * products.find((p) => p.name === selectedProduct1).price;
    const subTotal2 = quantity2 * products.find((p) => p.name === selectedProduct2).price;
    document.getElementById("subTotal1").textContent = `$${subTotal1.toFixed(2)}`;
    document.getElementById("subTotal2").textContent = `$${subTotal2.toFixed(2)}`;
    const totalAmount = subTotal1 + subTotal2;
    document.getElementById("totalAmount").textContent = `$${totalAmount.toFixed(2)}`;
  }
  
  function calculate() {
    updateTotal();
  }
  
  function generateInvoice() {
    updateTotal();
    const invoiceProduct1 = `${selectedProduct1} x ${quantity1} = $${(quantity1 * products.find((p) => p.name === selectedProduct1).price).toFixed(2)}`;
    const invoiceProduct2 = `${selectedProduct2} x ${quantity2} = $${(quantity2 * products.find((p) => p.name === selectedProduct2).price).toFixed(2)}`;
    const invoiceTotal = `Total: $${(quantity1 * products.find((p) => p.name === selectedProduct1).price + quantity2 * products.find((p) => p.name === selectedProduct2).price).toFixed(2)}`;
    document.getElementById("invoiceProduct1").textContent = invoiceProduct1;
    document.getElementById("invoiceProduct2").textContent = invoiceProduct2;
    document.getElementById("invoiceTotal").textContent = invoiceTotal;
    document.getElementById("invoice").style.display = "block";
  }
  