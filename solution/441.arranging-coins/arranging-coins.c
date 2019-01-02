int arrangeCoins(int n) {
    int i = 1;
    long long sum = 0;
    while(1)
    {
        sum += i;
        if(sum > n)
        {
            i--;
            break;
        }
        else if(sum == n)
            break;
        i++;
    }
    return i ;
}