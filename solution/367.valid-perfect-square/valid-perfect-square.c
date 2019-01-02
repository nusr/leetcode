bool isPerfectSquare(int num) {
    long long i = 1;
    while(1)
    {
        if(i * i == num)
            return 1;
        else if(i * i > num)
            break;
        i++;
    }
    return 0;
}