int compare ( const void *a , const void *b )  
  {  
  return *(int *)a - *(int *)b;  
}  
int arrayPairSum(int* nums, int numsSize) {
     qsort(nums,numsSize,sizeof(nums[0]),compare); 
    int i = 0,sum = 0;
    for(;i<numsSize;i= i +2){
        sum += nums[i];
    }
    return sum;
}