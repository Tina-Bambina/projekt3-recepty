const receptos = [
  { nadpis: 'Ovocný tvarohový dort',
    popis: 'Poslední roky u mě v létě vedl pusinkový dort Pavlova na mnoho a mnoho způsobů, ale letos mám nového favorita. Už jsem zkoušela mnoho verzí a je vždy výborný, lehký i svěží a tak ideální ne jen na léto.',
    hodnoceni: 4.4,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.pexels.com/photos/315707/pexels-photo-315707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  { nadpis: 'Těstoviny s pestem',
    popis: 'Pesto v tomto receptu je připraveno bez sýra – místo něj jsou použity dvě celé palice pečeného česneku. Špagety budou díky tomu skvěle dochucené!',
    hodnoceni: 4.2,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c9443baefd581d4e532b6d4f1e7879be&auto=format&fit=crop&w=1350&q=80'
  },
  { nadpis: 'Palačinka s medem a oříšky',
    popis: 'Nepomyslil, zničeně, očima zisk ta vina krevních, mě dře praha sám peče šíp čem unaven!',
    hodnoceni: 3.6,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=54182d2977056d28bd299799b8428fa6&auto=format&fit=crop&w=634&q=80'
  },
  { nadpis: 'Chléb s avokádem a vajíčkem',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.2,
    kategorie: 'Snídaně',
    stitek: 'snidane',
    img: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  { nadpis: 'Čokoládové brownie',
    popis: '11 omrzení schůdkách mu i očima o nos rys by šerého. Vodu po obejmout víte, to co haf otiskem přísní, uchu u taška prohrál u kuse lože, už že ví potřeby u chudáku. Vykoná ta o citů mstivě některá tahle z světů či odseděl lupiče?',
    hodnoceni: 4.9,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  { nadpis: 'Vajíčková omeleta se špenátem',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.2,
    kategorie: 'Snídaně',
    stitek: 'snidane',
    img: 'https://images.unsplash.com/photo-1494597706938-de2cd7341979?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6dc5376ce585ce0df0d44232b9bab53c&auto=format&fit=crop&w=1379&q=80'
  },
  { nadpis: 'Kuřecí salát',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.7,
    kategorie: 'Hlavní jidlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.pexels.com/photos/33406/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940'
  },
  { nadpis: 'Sýrová pizza',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.7,
    kategorie: 'Hlavní jidlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-0.3.5&s=8695cc99c49c956556f7411faf6df8b0&auto=format&fit=crop&w=1350&q=80'
  },
  { nadpis: 'Kuřecí roláda',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.6,
    kategorie: 'Hlavní jidlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1517609948086-6a03114ae1af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=24e11e05a26a3b992c8469426a628a90&auto=format&fit=crop&w=675&q=80'
  },
  { nadpis: 'Borůvkovo-tvarohový dezert',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 3.8,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.unsplash.com/photo-1504473089979-b1c4993a9653?ixlib=rb-0.3.5&s=a48ebf1c62105a202c421db95caa3b48&auto=format&fit=crop&w=634&q=80'
  },
  { nadpis: 'Hovězí steak',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.7,
    kategorie: 'Hlavní jidlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  { nadpis: 'Tiramisu',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 3.8,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.unsplash.com/photo-1502004960551-dc67f7c24cb3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ffa9224ea62436ebb99ebf25c50be60&auto=format&fit=crop&w=1320&q=80'
  },
  { nadpis: 'Ceasar salát',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 3.9,
    kategorie: 'Hlavní jidlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a5832df503143f0eb527593cd0c5abe6&auto=format&fit=crop&w=1350&q=80'
  },
  { nadpis: 'Sladký toast s ovocem',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.2,
    kategorie: 'Snídaně',
    stitek: 'snidane',
    img: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-0.3.5&s=b2f8991c8bfaac59a8d115930d9c12cd&auto=format&fit=crop&w=1350&q=80'
  },
  { nadpis: 'Vegetariánská pizza',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.7,
    kategorie: 'Hlavní jidlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1516183483970-cedfa98169fa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=28a8ffb099b40dc89c12cec6a7f0a68a&auto=format&fit=crop&w=1350&q=80'
  },
  { nadpis: 'Křupavé kuře',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.3,
    kategorie: 'Hlavní jidlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=353c1f4206a931db97274e65329b85d8&auto=format&fit=crop&w=634&q=80'
  },
]


let recepty = document.querySelector('.recepty');
let indexRecept = 0;

filtry();
receptySeznam();
receptyPodrobnostiKlik();


function filtry(){
  filterArray = [...receptos];
  hledejDleJmena();
  filtrKategorie();
  radaHodnoceni();
}



function receptySeznam() {

  for (let i = 0; i < receptos.length; i++)
  {
    //prazdne policko 
    let recept = document.createElement('div');
    recept.className='recept';
    recept.setAttribute('data-index', indexRecept);
    recepty.appendChild(recept);

    //iinformace o receptu
    let receptInfo = document.createElement('div');
    receptInfo.className="recept-info";
    recept.appendChild(receptInfo);

    let nadpisReceptInfo = document.createElement('h3');
    nadpisReceptInfo.innerHTML= receptos[indexRecept].nadpis;
    receptInfo.appendChild(nadpisReceptInfo);
    receptInfo.setAttribute('data-index', indexRecept);
    nadpisReceptInfo.setAttribute('data-index', indexRecept);

    //doprovodny obrazek receptu - mel by byt v tom policku!
    let receptObrazek =document.createElement('div');
    receptObrazek.className='recept-obrazek';
    recepty.appendChild(receptObrazek);
    receptObrazek.setAttribute('data-index', indexRecept);

    let receptObrazekImg = document.createElement('img');
    receptObrazekImg.src=receptos[indexRecept].img;
    receptObrazekImg.alt="obrazek";
    receptObrazek.appendChild(receptObrazekImg);
  
    receptObrazekImg.setAttribute('data-index', indexRecept);

    indexRecept++

    //at se na menu da klikat
    recept.addEventListener('click', receptyPodrobnostiKlik);
    recept.setAttribute('data-index', indexRecept)

    vytvorPolePoKliku()

  }
}

function    vytvorPolePoKliku(){
    //divy zobrazujici se po kliknuti - tady je chyba
    let recept = document.querySelector('div');

    let receptNadpis = document.createElement('div');
    receptNadpis.className="recept-nadpis";
    recept.appendChild(receptNadpis);
    receptNadpis.setAttribute('data-index', indexRecept)

    let receptPopis = document.createElement('div');
    receptPopis.className="recept-popis";
    recept.appendChild(receptPopis);
    receptPopis.setAttribute('data-index', indexRecept)
}


 function receptyPodrobnostiKlik(klikRecept, indexKlikRecept) {
    console.log('ddd')
    indexKlikRecept = klikRecept.target.getAttribute('data-index');
    nacistRecept(indexKlikRecept);    
    ulozKlikRecept(indexKlikRecept);

    document.querySelector('#recept-foto').src=receptos[indexKlikRecept].img;
    //ostatni jsou innerhtml!!!!!
    document.querySelector('#recept-kategorie').innerHTML=receptos[indexKlikRecept].kategorie;
    document.querySelector('#recept-hodnoceni').innerHTML=receptos[indexKlikRecept].hodnoceni;
    document.querySelector('#recept-nadpis').innerHTML=receptos[indexKlikRecept].nadpis;
    document.querySelector('#recept-popis').innerHTML=receptos[indexKlikRecept].popis;

    ulozKlikRecept(indexKlikRecept)
 }

 function ulozKlikRecept(indexKlikRecept) { // diodelat
    localStorage.indexA = indexKlikRecept;
}

 function nacistRecept (indexKlikRecept){
    console.log(indexKlikRecept)
    //uz to bere klikanou polozku

 }


 function hledejDleJmena() {
  console.log('jmeno')

}


function filtrKategorie() {
  console.log('kateg')
  }

  function   radaHodnoceni(){
    console.log('hodnoceni')

  }