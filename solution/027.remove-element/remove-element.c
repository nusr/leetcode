int removeElement(int* nums, int numsSize, int val) {
    int t = 0;
    int i = 0;
    for(i = 0;i < numsSize;)
    {
        if(nums[i] == val)
        {
            t = nums[numsSize - 1];
            nums[numsSize - 1] = nums[i];
            nums[i] = t;
            numsSize--;
        }
        else
            i++;
            
    }
    return numsSize;
}