int hammingDistance(int x, int y) {
    int t1 = 0,t2 = 0,count = 0;
    while(x != 0 || y != 0)
    {
        t1 = x & 1;
        if(x != 0)
            x >>= 1;
        t2 = y & 1;
        if(y != 0)
            y >>= 1;
        count += t1 ^ t2;
    }
    return count;
}