bool isHappy(int n) {
    int t = 0;
    int sum = 0;
    int flag = 0;
    int count = 0;
    do
    {
        if(count > 5)
            return 0;
        sum = 0;
        while(n != 0)
        {
            t = n % 10;
            if(t != 1)
                flag ++;
            else
                flag = 0;
            sum +=t * t;
            n /= 10;
        }
        if(flag != 0)
        {
            count++;
            flag = 0;
        }
        else
            count--;
        n = sum;
    }while(n != 1);
    return 1;
}