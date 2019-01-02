bool isUgly(int num) {
    if(num <= 0)
        return 0;
    else if(num == 1)
        return 1;
    int a[3] = {2,3,5};
    int i = 0;
    int flag = 0;
    for(i = 0;i < 3;i++)
    {
        while(num % a[i] == 0)
            num /= a[i];
    }
    if(num != 1)
        return 0;
    else 
        return 1;
}
