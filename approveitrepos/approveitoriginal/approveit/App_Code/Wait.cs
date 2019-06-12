using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;

public class Wait
{
    public void DoMath()
    {
        throw new NotImplementedException();
    }

    public void Sleep(TimeSpan delay)
    {
        Thread.Sleep(delay);
    }
}
