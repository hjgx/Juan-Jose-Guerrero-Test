
public class Problema5 {

    /**
     * @Autor Juan Jose Guerrero Conejo
     */
    public static void main(String[] args) {
        int[] arr = new int[]{1,2,2,5,4,6,7,7,7,7,8,8,8};
        System.out.print(ocurrencias(arr));
    }
    
    public static String ocurrencias(int[] nums){
        int numero =0;
        int ocurrencia = 0;
        int numor = 0;
        int numtot = 0;
        for (int i = 0; i < nums.length; i++) {
            numor = nums[i];
            numtot = 0;
            for (int j = 0; j < nums.length; j++) {
                if(nums[j]==numor){
                    numtot=numtot+1;
                }
            }
            if(numtot>ocurrencia){
                ocurrencia=numtot;
                numero = numor;
            }
            
        }
        
        return "numero="+numero+" , ocurrencia="+ocurrencia;
    }
    
}
