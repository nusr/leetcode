bool containsDuplicate(int* nums, int numsSize) {
    int i;
    int max = 0;
    bool flag = false;
    for(i = 1;i < numsSize;i++)
        if(nums[i] > nums[max])
            max = i;
    int *array= (int *)malloc(sizeof(int)*(nums[max]+1));
    for(i = 0;i <= nums[max];i++)
        array[i] = 0;
    for(i= 0;i <numsSize;i++)
        array[nums[i]]++;
    for(i=0;i <= nums[max];i++)
        if(array[i] > 1)
            flag = true;
    return flag;
    
}