int maxProfit(int* prices, int pricesSize) {
    int max = 0;
    int temp = 0;
    int i = 0;
    int j;
    for(j = 1;j < pricesSize;j ++)
    {
        if(prices[j] > prices[i])
            temp = prices[j] - prices[i];
        else
            i = j;
        if(temp > max)
            max = temp;
    }
    return max;
}