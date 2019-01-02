int addDigits(int num) {
    int t = 0;
    int sum = 0;
    while(1)
    {
        if(num < 10)
            break;
        sum = 0;
        while(num != 0)
        {
            sum += num  % 10;
            num /= 10;
        }
        num = sum;
    }
    return num;
}