bool isPowerOfThree(int n) {
    int a[30];
    int i = 0;
    a[0] = 1;
    for(i = 1;i < 21;i++)
        a[i] = 3 * a[i -1];
    for(i = 0;i < 21;i++)
        if(n == a[i])
            return  1;
    return 0;
}