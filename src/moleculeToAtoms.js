/*

For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object.

For example:

var water = 'H2O';
parseMolecule(water); // return {H: 2, O: 1}

var magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

var fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.


*/

// function parseMolecule(formula) {
//     var stack = [];
//     var elem = '';
//     var brackets = {'(': ')', '[': ']', '{': '}'};
//     // for each character
//     for(var i = 0; i < formula.length; i++) {
//       var curChar = formula[i];
//       // if the curChar is a-z
//       if(curChar.match(/[a-z]/)) {
//         // the prevChar must have been A-Z so add the curChar to elem 
//         elem += curChar;
//       // otherwise the curChar is a bracket, a number, or A-Z
//       } else {
//         // if the curChar is A-Z
//         if(curChar.match(/[A-Z]/)) {
//           // then we have found the firstChar of a new elem
//           // if i === 0, just add the CurChar to elem; otherwise push the previous built elem to the stack
//           // since we know that elem is finished
//           elem === '' ? elem += curChar : stack.push(elem);
//           // set elem to the curChar
//           elem = curChar;
//         }
//         if(i === formula.length - 1) {
//           stack.push(elem);
//         }
//         if(brackets[curChar] || bracket[curChar])
//         if(curChar.match(/\d/)) {
//           var curEl = stack.pop();
//           while(!brackets[curEl] && stack.length) {
//             atoms[curEl] = 1 * +curChar;
//             curEl = stack.pop();
//           }
//         }
//       }
//     }
//   return stack;
// }

function parseMolecule(formula) {
    var stack = [];
    var curElem = '';
    var atoms = {};
    // for each character
    for(var i = 0; i < formula.length; i++) {
      var curChar = formula[i];
      // if the curChar is a-z
      if(curChar.match(/[a-z]/)) {
        // then we are continuing the name of curElem 
        curElem += curChar;
      // if the curChar is A-Z
      } else if(curChar.match(/[A-Z]/)) {
          // then we have found the firstChar of a new elem and curElem is complete
          // if curElem = '', we are on the first character so just add it to curElem
          // otherwise curElem is a completed elem, so push it to the stack
          curElem === '' ? curElem += curChar : stack.push(curElem);
          // set elem to the curChar, to overwrite the previously completed curElem
          curElem = curChar;
          // TODO: account for final elem
      } else if(curChar.match(/\d/)) {
          stack.push(curElem);
          curElem = '';
          var multiplier = +curChar;
          var elemToMultiply = stack.pop();
          while(elemToMultiply && elemToMultiply.match(/[a-z]/i)) {
            atoms[elemToMultiply] = atoms[elemToMultiply] || 1;
            atoms[elemToMultiply] = atoms[elemToMultiply] * multiplier;
            elemToMultiply = stack.pop();
          }
      } else if(curChar.match(/[\{\[\(]/)) {
          stack.push([]);
          stack = stack[stack.length - 1];
      }
    }
  return atoms;
}

console.log(parseMolecule('H2O2'));

console.log(parseMolecule('Mg(OH)2'));

console.log(parseMolecule('K4[ON(SO3)2]2'));

console.log(parseMolecule('B4Ba2(OH)8'));

  // var elements = {
  //                  'H': 'H',
  //                  'He': 'He',
  //                  'Li': 'Li',
  //                  'Be': 'Be',
  //                  'B':  'B',
  //                  C  C
  //                  N  N
  //                  O  O
  //                  F  F
  //                  Ne Ne
  //                  Na Na
  //                  Mg Mg
  //                  Al Al
  //                  Si Si
  //                  P  P
  //                  S  S
  //                  Cl Cl
  //                  Ar Ar
  //                  K  K
  //                  Ca Ca
  //                  Sc Sc
  //                  Ti Ti
  //                  V  V
  //                  Cr Cr
  //                  Mn Mn
  //                  Fe Fe
  //                  Co Co
  //                  Ni Ni
  //                  Cu Cu
  //                  Zn Zn
  //                  Ga Ga
  //                  Ge Ge
  //                  As As
  //                  Se Se
  //                  Br Br
  //                  Kr Kr
  //                  Rb Rb
  //                  Sr Sr
  //                  Y  Y
  //                  Zr Zr
  //                  Nb Nb
  //                  Mo Mo
  //                  Tc Tc
  //                  Ru Ru
  //                  Rh Rh
  //                  Pd Pd
  //                  Ag Ag
  //                  Cd Cd
  //                  In In
  //                  Sn Sn
  //                  Sb Sb
  //                  Te Te
  //                  I  I
  //                  Xe Xe
  //                  Cs Cs
  //                  Ba Ba
  //                  La La
  //                  Ce Ce
  //                  Pr Pr
  //                  Nd Nd
  //                  Pm Pm
  //                  Sm Sm
  //                  Eu Eu
  //                  Gd Gd
  //                  Tb Tb
  //                  Dy Dy
  //                  Ho Ho
  //                  Er Er
  //                  Tm Tm
  //                  Yb Yb
  //                  Lu Lu
  //                  Hf Hf
  //                  Ta Ta
  //                  W  W
  //                  Re Re
  //                  Os Os
  //                  Ir Ir
  //                  Pt Pt
  //                  Au Au
  //                  Hg Hg
  //                  Tl Tl
  //                  Pb Pb
  //                  Bi Bi
  //                  Po Po
  //                  At At
  //                  Rn Rn
  //                  Fr Fr
  //                  Ra Ra
  //                  Ac Ac
  //                  Th Th
  //                  Pa Pa
  //                  U  U
  //                  Np Np
  //                  Pu Pu
  //                  Am Am
  //                  Cm Cm
  //                  Bk Bk
  //                  Cf Cf
  //                  Es Es
  //                  Fm Fm
  //                  Md Md
  //                  No No
  //                  Lr Lr
  //                  Rf Rf
  //                  Db Db
  //                  Sg Sg
  //                  Bh Bh
  //                  Hs Hs
  //                  Mt Mt
  //                  'Ds': 'Ds',
  //                  'Rg': 'Rg',
  //                  'Cn': 'Cn',
  //                  'Uut': 'Uut',
  //                  'Fl': 'Fl',
  //                  'Uup': 'Uup',
  //                  'Lv': 'Lv',
  //                  'Uus':  'Uus',
  //                  'Uuo': 'Uuo'
  //                };