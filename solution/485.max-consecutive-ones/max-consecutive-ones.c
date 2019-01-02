int findMaxConsecutiveOnes(int* nums, int numsSize) {
    int max = 0;
    int temp = 0;
    int i = 0;
    for(;i < numsSize;i++){
        if(nums[i]){
            temp++;
        }else {
            temp = 0;
        }
        if(temp > max){
            max = temp;
        }
    }
    return max;
}