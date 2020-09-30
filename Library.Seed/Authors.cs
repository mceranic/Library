using Library.DAL;
using OfficeOpenXml;

namespace Library.Seed
{
    public static class Authors
    {
        public static void Collect(ExcelWorksheet rawData, UnitOfWork unit)
        {
            for (int row = 2; row <= rawData.Dimension.Rows; row++)
            {
                int oldId = rawData.ReadInteger(row, 1);
                Author a = new Author
                {
                    Name = rawData.ReadString(row, 2),
                    Biography = rawData.ReadString(row, 3),
                    Image = rawData.ReadString(row, 4),
                    Birthday = rawData.ReadDate(row, 5),
                    Email = rawData.ReadString(row, 6)
                };
                unit.Authors.Insert(a);
                unit.Save();
                Utility.authDictionary.Add(oldId, a.Id);
            }
        }
    }
}
