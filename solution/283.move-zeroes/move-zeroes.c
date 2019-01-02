void moveZeroes(int* nums, int numsSize) {
    int i=-1;
    int j=0;
    int t;
    while(j<numsSize)
    {
        if(nums[j]!=0)
        {
            i++;
            if(i!=j)
            {
                t=nums[i];
                nums[i]=nums[j];
                nums[j]=t;
            }
            
        }
        j++;
    }
}