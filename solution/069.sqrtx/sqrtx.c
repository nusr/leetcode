int mySqrt(int x) {
    long long i = 1;
    int out = 0;
    while(1)
    {
        if(i * i == x)
        {
            out = i;
            break;
        }
        else if( i * i > x)
        {
            out = i - 1;
            break;
        }
        i++;
    }
    return out;
}