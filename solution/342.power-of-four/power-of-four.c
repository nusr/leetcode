bool isPowerOfFour(int num) {
    if(num == 0)
        return false;
    int a[30];
    int i = 0;
    a[0] = 1;
    for(i = 1;i < 19;i++)
        a[i] = 4 * a[i - 1];
    for(i = 0;i < 19;i++)
        if(num == a[i])
            return true;
    return false;
}
    