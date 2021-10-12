const countries = [
    {
      image: "https://flagpedia.net/data/flags/w580/de.png",
      country: "Germany",
      population: "81,770,900",
      region: "Europe",
      capital: "Berlin"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/au.png",
      country: "Australia",
      population: "91,657,312",
      region: "Aus",
      capital: "Canberra"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/in.png",
      country: "India",
      population: "1,3179,984,812",
      region: "Asia",
      capital: "New Delhi"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/kr.png",
      country: "South Korea",
      population: "40,400,000",
      region: "Asia",
      capital: "Seoul"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/us.png",
      country: "United States of America",
      population: "323,947,000",
      region: "North America",
      capital: "Washington,D.C"
    }
  ];
   const details=document.createElement("section");
  countries.forEach((a)=>{
    const countdetails=document.createElement("div")
    countdetails.setAttribute("container","div")
    const countimg=document.createElement("img");
    countimg.setAttribute("src",a.image)
    document.body.append(countimg);
    
  
    const countname=document.createElement("h2");
    countname.innerText="country:"+a.country;
    document.body.append(countname);
    
    const countpopulation=document.createElement("p");
    countpopulation.innerText="population:"+a.population;
    document.body.append(countpopulation)
    
    
    
     const countregion=document.createElement("p");
    countregion.innerText="region:"+a.region;
    document.body.append(countregion)
      
    
      
    const countcapital=document.createElement("p");
    countcapital.innerText="capital:"+a.capital;
    document.body.append(countcapital)
    document.body.append(countdetails)
    
      })
  
  
   
   
  
  