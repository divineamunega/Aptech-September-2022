import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
int arr[] = new int[4];
arr[0]  = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;

int num[] = new int[4];

for(int i = 1; i < arr.length; i++){
    num[0]  = arr[0];
    num[i] = arr[i] + num[i - 1];
}
        System.out.println(Arrays.toString(num));
    // Hello I'm fredrick
    }
}