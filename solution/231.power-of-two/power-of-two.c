bool isPowerOfTwo(int n) {
    int p[32] = {1,2};
    int i = 0;
    for(i = 2;i < 31;i++)
        p[i] = p[i - 1] * 2;
    for(i = 0;i < 31;i++)   
        if(n == p[i])
            return 1;
    return 0;
}
    