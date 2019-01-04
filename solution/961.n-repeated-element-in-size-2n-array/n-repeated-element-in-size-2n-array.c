#define MaxSize 10000
int repeatedNTimes(int* A, int ASize) {
    int hash[MaxSize];
    int i = 0;
    int key = 0 ;
    for(;i < MaxSize;i++) hash[i] = 0;
    for(i = 0;i < ASize;i++){
        key = A[i];
        hash[key]++;
        if(hash[key] > 1){
           break;
        }
    }
    return key;
}