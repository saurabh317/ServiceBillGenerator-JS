const showServiceSec = document.querySelector(".serviceBox");
const selectCarType = document.querySelector(".select_car");
const price = document.querySelectorAll(".servicePrice");
const selectPrice = document.querySelectorAll(".SelectBtn");
const generateBill = document.querySelector(".generateBill");
const modalService = document.querySelectorAll('.modalService');
const modalServicePrice = document.querySelectorAll('.modalServicePrice');
const BillModal = document.querySelector('.BillModal');
const BillModalOverlay = document.querySelector('.BillModalOverlay');
const billPrice = document.querySelector('.billPrice');
let carService;

class CarServiceStation {

    constructor(carType) {
     this.carType = carType;
     this.BS01bill = 0;
     this.EF01bill = 0;
     this.CF01bill = 0;
     this.BF01bill = 0;
     this.GF01bill = 0;
     this.totalBill = 0;
     }

    genrateBill(choosenService) {

        switch(this.carType){
            case "Hatchback":
              choosenService.forEach(e => {
                if(e === "BS01"){
                    this.BS01bill = 2000;
                    this.totalBill += this.BS01bill;
                }
                if(e === "EF01"){
                    this.EF01bill = 5000;
                    this.totalBill += this.EF01bill;
                }
                if(e === "CF01"){
                    this.CF01bill = 2000;
                    this.totalBill += this.CF01bill;
                }
                if(e === "BF01"){
                    this.BF01bill = 1000;
                    this.totalBill += this.BF01bill;
                }
                if(e === "GF01"){
                    this.GF01bill = 3000;
                    this.totalBill += this.GF01bill;
                }
              })
              
            break;

            case "SUV":
                choosenService.forEach(e => {
                    if(e === "BS01"){
                        this.BS01bill = 5000;
                        this.totalBill += this.BS01bill;
                    }
                    if(e === "EF01"){
                        this.EF01bill = 10000;
                        this.totalBill += this.EF01bill;
                    }
                    if(e === "CF01"){
                        this.CF01bill = 6000;
                        this.totalBill += this.CF01bill;
                    }
                    if(e === "BF01"){
                        this.BF01bill = 2500;
                        this.totalBill += this.BF01bill;
                    }
                    if(e === "GF01"){
                        this.GF01bill = 8000;
                        this.totalBill += this.GF01bill;
                    }
                  })
            break;

            case "Sedan":
                choosenService.forEach(e => {
                    if(e === "BS01"){
                        this.BS01bill = 4000;
                        this.totalBill += this.BS01bill;
                    }
                    if(e === "EF01"){
                        this.EF01bill = 8000;
                        this.totalBill += this.EF01bill;
                    }
                    if(e === "CF01"){
                        this.CF01bill = 4000;
                        this.totalBill += this.CF01bill;
                    }
                    if(e === "BF01"){
                        this.BF01bill = 1500;
                        this.totalBill += this.BF01bill;
                    }
                    if(e === "GF01"){
                        this.GF01bill = 6000;
                        this.totalBill += this.GF01bill;
                    }
                  })
            break;
            default:
        }

        this.getBill();
    }

    getBill() {
      
        const arrServiceName = ["Basic Services", "Engine Fixing", "Clutch Fixing", "Brake Fixing", "Gear Fixing"];
        const arrServicePrice = [this.BS01bill, this.EF01bill, this.CF01bill, this.BF01bill, this.GF01bill];

        modalService.forEach((item, i) => {
           item.textContent = arrServiceName[i];
          const newArr = Array.from(modalServicePrice)
            newArr[i].textContent  = "Rs " + arrServicePrice[i];
        })

        billPrice.textContent = 'Rs '+ this.totalBill;

    }

}

const selectCarTypeHandler = (e) => {

    
    if(e.target.value === 'SUV'){
      const priceArr = [5000,10000,6000,2500,8000];
      console.log(price);
      Array.from(price).forEach((e, i) => {
          price[i].textContent = 'Rs '+priceArr[i];  
      })
    }
    if(e.target.value === 'Hatchback'){
        const priceArr = [2000,5000,2000,1000,3000];
        Array.from(price).forEach((e, i) => {
            price[i].textContent = 'Rs '+priceArr[i];  
        })
        

    }
    if(e.target.value === 'Sedan'){
        const priceArr = [4000,8000,4000,1500,6000];
        console.log(price);
        Array.from(price).forEach((e, i) => {
            price[i].textContent = 'Rs '+priceArr[i];  
        })

    }
        
    showServiceSec.style.display = 'flex';
     carService = new CarServiceStation(e.target.value);
     console.log(carService.genrateBill)
}

const services=[];

selectCarType.addEventListener('change', selectCarTypeHandler);

const selectServices =(e)=>{
 
    const serviceValue = String(e.target.value);

    const findServices = services.find(e => e == serviceValue);

      if(findServices){
        return;
      }else{
        services.push(serviceValue);
      }   
}


selectPrice.forEach(e => e.addEventListener('click', selectServices));

const GenerateCustomerBill = () => {
     carService.genrateBill(services);
     BillModal.style.display = 'block';
     BillModalOverlay.style.display = 'block';
}

BillModalOverlay.addEventListener('click', () => {
    BillModal.style.display = 'none';
    BillModalOverlay.style.display = 'none';
})


generateBill.addEventListener('click', GenerateCustomerBill);




