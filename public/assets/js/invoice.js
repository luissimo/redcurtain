// Output invoicenumber on invoice.
    $(document).on('keyup', '#factuurnummer_input', function() {
        $('.factuurnummer_output').text($(this).val())
    });

// Output invoicedate on invoice header
    date_1 = $("#invoice_date_1i");
    date_2 = $("#invoice_date_2i");
    date_3 = $("#invoice_date_3i");

    $(".factuurdatum_output").text( (date_3.val()) + ' ' + (date_2.find(":selected").text()) + ' ' +  (date_1.val()) );

    date_3.change(function()
    {
        $('.factuurdatum_output').text( ($(this).val()) + ' ' + (date_2.find(":selected").text()) + ' ' +  (date_1.val()) ) ;
    });
    date_2.change(function()
    {
        $('.factuurdatum_output').text( (date_3.val()) + ' ' + ($(this).find(":selected").text()) + ' ' + (date_1.val()) ) ;
    });
    date_1.change(function()
    {
        $('.factuurdatum_output').text( (date_3.val()) + ' ' + (date_2.find(":selected").text()) + ' ' + ($(this).val()) ) ;
    });


// Output invoicedate on invoice body
    $("#date_output").text( (date_3.val()) + ' ' + (date_2.find(":selected").text()) + ' ' +  (date_1.val()) );

    date_3.change(function()
    {
        $('#date_output').text( ($(this).val()) + ' ' + (date_2.find(":selected").text()) + ' ' +  (date_1.val()) ) ;
    });
    date_2.change(function()
    {
        $('#date_output').text( (date_3.val()) + ' ' + ($(this).find(":selected").text()) + ' ' + (date_1.val()) ) ;
    });
    date_1.change(function()
    {
        $('#date_output').text( (date_3.val()) + ' ' + (date_2.find(":selected").text()) + ' ' + ($(this).val()) ) ;
    });

// Output invoice duedate on invoice body

    duedate_1 = $("#invoice_duedate_1i");
    duedate_2 = $("#invoice_duedate_2i");
    duedate_3 = $("#invoice_duedate_3i");

    $(".duedate_output").text(' ' + (duedate_3.val()) + ' ' + (duedate_2.find(":selected").text()) + ' ' +  (duedate_1.val()) );

    duedate_3.change(function()
    {
        $('.duedate_output').text(' ' +  ($(this).val()) + ' ' + (duedate_2.find(":selected").text()) + ' ' +  (duedate_1.val()) ) ;
    });
    duedate_2.change(function()
    {
        $('.duedate_output').text(' ' + (duedate_3.val()) + ' ' + ($(this).find(":selected").text()) + ' ' + (duedate_1.val()) ) ;
    });
    duedate_1.change(function()
    {
        $('.duedate_output').text(' ' + (duedate_3.val()) + ' ' + (duedate_2.find(":selected").text()) + ' ' + ($(this).val()) ) ;
    });


// add a row to invoice
    $(document).ready(function() {
        var counter = $('.products_tr').length;
        $('#add_products').click(function() {
            $('.products_tr:last').after('<tr class="products_tr"><td><input class="quantity form-control" type="text" value="" name="invoice[items_attributes]['+counter+'][quantity]"></td>' +
                '<td><textarea class="form-control" name="invoice[items_attributes]['+counter+'][description]"></textarea></td>' +
                '<td><input id="unitprice" class="unitprice form-control" type="text" name="invoice[items_attributes]['+counter+'][unitprice]"></td>' +
                '<td class="row_total"></td>' +
                '<td><select class="btw_percentage form-control" name="invoice[items_attributes]['+counter+'][btw]"><option title="21%" value="21"> 21%</option> ' +
                '<option title="6%" value="6"> 6%</option><option title="0%" value="0"> 0%</option></select></td>' +
                '<td class="delete_tr"><a class="delete" title="Rij verwijderen"><span class="ti-close"></span></a></td></tr>');
            counter ++;
        });
    });

    btwtotal =  $('.invoice_btwtotal');
    subtotal =  $('.invoice_subtotal');
    totalclass   =  $('.invoice_total');

// delete a row from invoice
    $(document).on('click', '.delete_tr', function() {
        $(this).closest('tr').remove();
        var total = 0,rowtotal = 0, invoice_btwtotaal = 0, invoice_subtotal = 0, invoice_total = 0;
        $('.products_tr').each(function(){
            $(this).find('.unitprice').val($(this).find('.unitprice').val().replace(/,/g, '.'));
            var quantity       =  parseInt($(this).find('.quantity').val());
            var unitprice      =  parseFloat($(this).find('.unitprice').val());
            var btw_percentage =  parseInt($(this).find('.btw_percentage option:selected').val());
            var btw = (btw_percentage / 100 ) + 1;
            rowtotal           =  quantity * unitprice;
            var currency = $('#invoice_currency option:selected').html();
            var fixed_rowtotal = currency + rowtotal.toFixed(2);
            var invoice_btw = (quantity * unitprice * btw) - (quantity * unitprice);
            $(this).find('.row_total').text(fixed_rowtotal);
            invoice_btwtotaal += invoice_btw;
            btwtotal.val(invoice_btwtotaal.toFixed(2));
            btwtotal.text(currency + invoice_btwtotaal.toFixed(2));
            formula = (parseFloat($(this).find('.unitprice').val())) * (parseInt($(this).find('.quantity').val()));
            invoice_subtotal += formula ;
            subtotal.val(invoice_subtotal.toFixed(2));
            subtotal.text(currency + invoice_subtotal.toFixed(2));
            var invoice_total = invoice_subtotal + invoice_btwtotaal || 0;
            totalclass.val(invoice_total.toFixed(2));
            totalclass.text(currency + invoice_total.toFixed(2));
            total+=rowtotal;
        });
    });


// hide 'delete row button' on invoice unless atleast rows > 1
    $(document).ready(function() {
        rowlength = $('.products_tr').length;
        if(rowlength > 1) {
            $('.delete_tr').show();
        } else {
            $('.delete_tr').hide();
        }
    });


// hide 'add row button' after 10 rows
    $(document).ready(function() {
        $('.products_tr').change(function() {
            var length =  $('.products_tr').length;
            if (length >= 10) {
                $('#add_products').hide();
                alert('U kunt geen rijen meer toevoegen, maak een nieuwe factuur aan.')
            }
        })
    });



// do row total, subtotal, btwtotal & invoice total calculation if quantity value changes
    $(document).on('change', '.quantity', function(){
        var total = 0,rowtotal = 0, invoice_btwtotaal = 0, invoice_subtotal = 0, invoice_total = 0;
        $('.products_tr').each(function(){
            var quantity       =  parseInt($(this).find('.quantity').val());
            var unitprice      =  parseFloat($(this).find('.unitprice').val());
            var btw_percentage =  parseInt($(this).find('.btw_percentage option:selected').val());
            var btw = (btw_percentage / 100 ) + 1;
            rowtotal           =  quantity * unitprice;
            var currency = $('#invoice_currency option:selected').html();
            var fixed_rowtotal = currency + rowtotal.toFixed(2);
            if (parseFloat($(this).find('.unitprice').val())) {
                var invoice_btw = (quantity * unitprice * btw) - (quantity * unitprice);
                $(this).find('.row_total').text(fixed_rowtotal);
                invoice_btwtotaal += invoice_btw;
                btwtotal.val(invoice_btwtotaal.toFixed(2));
                btwtotal.text(currency + invoice_btwtotaal.toFixed(2));
                formula = (parseFloat($(this).find('.unitprice').val())) * (parseInt($(this).find('.quantity').val()));
                invoice_subtotal += formula ;
                subtotal.val(invoice_subtotal.toFixed(2));
                subtotal.text(currency + invoice_subtotal.toFixed(2));
                var invoice_total = invoice_subtotal + invoice_btwtotaal || 0;
                totalclass.val(invoice_total.toFixed(2));
                totalclass.text(currency + invoice_total.toFixed(2));
                total+=rowtotal;
            }
            else if (isNaN(rowtotal)) {
                $(this).find('.row_total').text(currency);
            }
            else {
                $(this).find('.row_total').text(currency);
            }
        });
    });

// do row total, subtotal, btwtotal & invoice total calculation if unitprice value changes
    $(document).on('keyup', '.unitprice', function(){
        var total = 0,rowtotal = 0, invoice_btwtotaal = 0, invoice_subtotal = 0, invoice_total = 0;
        $('.products_tr').each(function(){
            $(this).find('.unitprice').val($(this).find('.unitprice').val().replace(/,/g, '.'));
            var quantity       =  parseInt($(this).find('.quantity').val());
            var unitprice      =  parseFloat($(this).find('.unitprice').val());
            var btw_percentage =  parseInt($(this).find('.btw_percentage option:selected').val());
            var btw = (btw_percentage / 100 ) + 1;
            rowtotal           =  quantity * unitprice;
            var currency = $('#invoice_currency option:selected').html();
            var fixed_rowtotal = currency + rowtotal.toFixed(2);
            var invoice_btw = (quantity * unitprice * btw) - (quantity * unitprice);
            $(this).find('.row_total').text(fixed_rowtotal);
            invoice_btwtotaal += invoice_btw;
            btwtotal.val(invoice_btwtotaal.toFixed(2));
            btwtotal.text(currency + invoice_btwtotaal.toFixed(2));
            formula = (parseFloat($(this).find('.unitprice').val())) * (parseInt($(this).find('.quantity').val()));
            invoice_subtotal += formula ;
            subtotal.val(invoice_subtotal.toFixed(2));
            subtotal.text(currency + invoice_subtotal.toFixed(2));
            var invoice_total = invoice_subtotal + invoice_btwtotaal || 0;
            totalclass.val(invoice_total.toFixed(2));
            totalclass.text(currency + invoice_total.toFixed(2));
            total+=rowtotal;
        });
    });
// do row total, subtotal, btwtotal & invoice total calculation if btw_percentage value changes
    $(document).on('change', '.btw_percentage', function(){
        var total = 0,rowtotal = 0, invoice_btwtotaal = 0, invoice_subtotal = 0, invoice_total = 0;
        $('.products_tr').each(function(){
            var quantity       =  parseInt($(this).find('.quantity').val());
            var unitprice      =  parseFloat($(this).find('.unitprice').val());
            var btw_percentage =  parseInt($(this).find('.btw_percentage option:selected').val());
            var btw = (btw_percentage / 100 ) + 1;
            rowtotal           =  quantity * unitprice;
            var currency = $('#invoice_currency option:selected').html();
            var fixed_rowtotal = currency + rowtotal.toFixed(2);
            var invoice_btw = (quantity * unitprice * btw) - (quantity * unitprice);
            $(this).find('.row_total').text(fixed_rowtotal);
            invoice_btwtotaal += invoice_btw;
            btwtotal.val(invoice_btwtotaal.toFixed(2));
            btwtotal.text(currency + invoice_btwtotaal.toFixed(2));
            formula = (parseFloat($(this).find('.unitprice').val())) * (parseInt($(this).find('.quantity').val()));
            invoice_subtotal += formula ;
            subtotal.val(invoice_subtotal.toFixed(2));
            subtotal.text(currency + invoice_subtotal.toFixed(2));
            var invoice_total = invoice_subtotal + invoice_btwtotaal || 0;
            totalclass.val(invoice_total.toFixed(2));
            totalclass.text(currency + invoice_total.toFixed(2));
            total+=rowtotal;
        });
    });
// do row total, subtotal, btwtotal & invoice total calculation if currency value changes
    $(document).on('change', '#invoice_currency', function Calculate() {
        var total = 0,rowtotal = 0, invoice_btwtotaal = 0, invoice_subtotal = 0, invoice_total = 0;
        $('.products_tr').each(function(){
            var quantity       =  parseInt($(this).find('.quantity').val());
            var unitprice      =  parseFloat($(this).find('.unitprice').val());
            var btw_percentage =  parseInt($(this).find('.btw_percentage option:selected').val());
            var btw = (btw_percentage / 100 ) + 1;
            rowtotal           =  quantity * unitprice;
            var currency = $('#invoice_currency option:selected').html();
            var fixed_rowtotal = currency + rowtotal.toFixed(2);
            if (parseFloat($(this).find('.unitprice').val())) {
                var invoice_btw = (quantity * unitprice * btw) - (quantity * unitprice);
                $(this).find('.row_total').text(fixed_rowtotal);
                invoice_btwtotaal += invoice_btw;
                btwtotal.val(currency + invoice_btwtotaal.toFixed(2));
                btwtotal.text(currency + invoice_btwtotaal.toFixed(2));
                formula = (parseFloat($(this).find('.unitprice').val())) * (parseInt($(this).find('.quantity').val()));
                invoice_subtotal += formula ;
                subtotal.val(invoice_subtotal.toFixed(2));
                subtotal.text(currency + invoice_subtotal.toFixed(2));
                var invoice_total = invoice_subtotal + invoice_btwtotaal || 0;
                totalclass.val(invoice_total.toFixed(2));
                totalclass.text(currency + invoice_total.toFixed(2));
                total+=rowtotal;
            }
            else if (isNaN(rowtotal)) {
                $(this).find('.row_total').text(currency);
            }
            else {
                $(this).find('.row_total').text(currency);
            }
            $('.euro-sign').text(currency);
        });
    });

// do row total, subtotal, btwtotal & invoice total calculation when DOM is ready
    $(document).ready(function() {
        var total = 0,rowtotal = 0, invoice_btwtotaal = 0, invoice_subtotal = 0, invoice_total = 0;
        $('.products_tr').each(function(){
            var quantity       =  parseInt($(this).find('.quantity').val());
            var unitprice      =  parseFloat($(this).find('.unitprice').val());
            var btw_percentage =  parseInt($(this).find('.btw_percentage option:selected').val());
            var btw = (btw_percentage / 100 ) + 1;
            rowtotal           =  quantity * unitprice;
            var currency = $('#invoice_currency option:selected').html();
            var fixed_rowtotal = currency + rowtotal.toFixed(2);
            if (parseFloat($(this).find('.unitprice').val())) {
                var invoice_btw = (quantity * unitprice * btw) - (quantity * unitprice);
                $(this).find('.row_total').text(fixed_rowtotal);
                invoice_btwtotaal += invoice_btw;
                btwtotal.val(invoice_btwtotaal.toFixed(2));
                btwtotal.text(currency + invoice_btwtotaal.toFixed(2));
                formula = (parseFloat($(this).find('.unitprice').val())) * (parseInt($(this).find('.quantity').val()));
                invoice_subtotal += formula ;
                subtotal.val(invoice_subtotal.toFixed(2));
                subtotal.text(currency + invoice_subtotal.toFixed(2));
                var invoice_total = invoice_subtotal + invoice_btwtotaal || 0;
                totalclass.val(invoice_total.toFixed(2));
                totalclass.text(currency + invoice_total.toFixed(2));
                total+=rowtotal;
            }
            else if (isNaN(rowtotal)) {
                $(this).find('.row_total').text(currency);
            }
            else {
                $(this).find('.row_total').text(currency);
            }
        });
    });

