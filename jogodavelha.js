           var mat = [['8','8','8'],
                      ['8','8','8'],
                      ['8','8','8']]
            var jogada = 1;
            var fim=false;
            function resultado(lin,col){
                if(mat[lin][col]=='8'&& fim==false)
                {
                    if(jogada%2!=0)
                    {
                        document.getElementById("I"+lin+col).innerHTML="X";
                        mat[lin][col]="X";
                    }
                    else{
                        document.getElementById("I"+lin+col).innerHTML="O";
                        mat[lin][col]="O";
                    }
                    jogada++;
                    verificarlinha();
                    verificarcoluna();
                    verificardiagonal();
                    verificartransversal(); 
                    if(jogada==11){
                        verificarempate();
                    }                   
                }
            }
            function verificarlinha(){
                for (var i = 0; i < 3; i++){
                    if (mat[i][0] === mat[i][1] && mat[i][1] === mat[i][2] && mat[i][0] !== '8')
                    {
                        mostrarvencedor(mat[i][0]);
                        return;
                    } 
                }
            }
            function verificarcoluna()
            {
                for (var i = 0; i < 3; i++){
                
                    if (mat[0][i] === mat[1][i] && mat[1][i] === mat[2][i] && mat[0][i] !== '8')
                    {
                        mostrarvencedor(mat[0][i]);
                        return;
                    }    
                }
            }
            function verificardiagonal(){
                for (var i = 0; i < 3; i++){

                    if (mat[0][0] === mat[1][1] && mat[1][1] === mat[2][2] && mat[2][2] !== '8')
                    {
                        mostrarvencedor(mat[0][0]);
                    return;
                    }
                }
            }
            function verificartransversal(){
                for (var i = 0; i < 3; i++)
                {
                    if (mat[0][2] === mat[1][1] && mat[1][1] === mat[2][0] && mat[2][0] !== '8')
                    {
                        mostrarvencedor(mat[0][2]);
                        return;
                    }
                }
            }
            function mostrarvencedor(vencedor){
                fim=true;
                var vencedor;
              if(vencedor == 'X'){
                vencedor=document.getElementById("jogador1").value;            
            } 
              else{
                vencedor=document.getElementById("jogador2").value;
            }
                document.getElementById("result").innerHTML = "Parabéns!!!!" + vencedor + "você venceu";
            }
            function verificarempate(){
                document.getElementById("result").innerHTML = "NÃO TEM VENCEDOR !!!";
            }

        