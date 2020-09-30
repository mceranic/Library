using Library.DAL;
using OfficeOpenXml;

namespace Library.Seed
{
    public static class Books
    {
        public static void Collect(ExcelWorksheet rawData, UnitOfWork unit)
        {
            for (int row = 2; row <= rawData.Dimension.Rows; row++)
            {
                int oldId = rawData.ReadInteger(row, 1);
                Book b = new Book
                {
                    Title = rawData.ReadString(row, 2),
                    Description = rawData.ReadString(row, 3),
                    Image = rawData.ReadString(row, 4),
                    Pages = rawData.ReadInteger(row, 5),
                    Price = rawData.ReadDecimal(row, 6),
                    Publisher = unit.Publishers.Get(Utility.pubsDictionary[rawData.ReadInteger(row, 7)])
                };
                unit.Books.Insert(b);
                unit.Save();
                Utility.bookDictionary.Add(oldId, b.Id);
            }
        }
    }
}
