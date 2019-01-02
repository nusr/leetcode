int majorityElement(int* nums, int numsSize) {
    int i;
    int count = 1;
    int temp = 0;
    for(i=1;i<numsSize;i++)
    {
        if(nums[temp] == nums[i])
            count++;
        else
        {
            count--;
            if(count == 0)
            {
                temp = i;
                count =1;
            }
        }
    }
    return nums[temp];
}