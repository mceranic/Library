using Library.DAL;
using OfficeOpenXml;

namespace Library.Seed
{
    public static class Publishers
    {
        public static void Collect(ExcelWorksheet rawData, UnitOfWork unit)
        {
            for (int row = 2; row <= rawData.Dimension.Rows; row++)
            {
                int oldId = rawData.ReadInteger(row, 1);
                Publisher p = new Publisher
                {
                    Name = rawData.ReadString(row, 2),
                    Road = rawData.ReadString(row, 3),
                    ZipCode = rawData.ReadString(row, 4),
                    City = rawData.ReadString(row, 5),
                    Country = rawData.ReadString(row, 6)
                };
                unit.Publishers.Insert(p);
                unit.Save();
                Utility.pubsDictionary.Add(oldId, p.Id);
            }
        }
    }
}
