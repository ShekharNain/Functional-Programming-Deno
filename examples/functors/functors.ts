import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";


Deno.test("square elements in the array", () => {
    const arr = [1,2,3,4,5];
    const squared_arr = arr.map(x => x*x);
  
    assertEquals(squared_arr, [1,4,9,16,25]);
  });

// lets create our own Functors
const Functor = (val: any) => ({
    map: (fn: any) => Functor(fn(val)),
    val,
});

Deno.test("Lets test our custom Functor", () => {
    const trafficLightFunctor = Functor('🔴');
    const transformedFunctor = trafficLightFunctor.map((val: any) => (`Traffic light signal: ${val}`));
    console.log(transformedFunctor.val);
  
    assertEquals(transformedFunctor.val, 'Traffic light signal: 🔴');
  });

// Another functor
//   class Train {
//     private wagons: any;
//     constructor(connectedWagons=[]){
//       this.wagons = ["engine", "coal", ...connectedWagons];
//     }
    
//     map(func: any) {
//       const [_engine, _coal, ...others] = this.wagons;
//       return new Train(others.map(func));
//     }
    
//     beep() {
//       console.log("boooooooop!");
//     }
//   }
  
//   const heavyTrain = new Train(["lead", "lead", "people"]);
//   const alchemistTrain = heavyTrain.map((wagon: any) => wagon === "lead"? "gold" : wagon);


// not a functor
// class BulletTrain extends Train {
//     beep(){
//       console.log("No beeps!"); 
//     }
//   }
  
//   const bTrain = new BulletTrain(["people"]);
//   const voidTrain = bTrain.map(() => null);
// now voidTrain won't be a BulletTrain