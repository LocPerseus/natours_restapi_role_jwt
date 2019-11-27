const Tour = require('../model/tourModel');
// 2. HANDLE ROUTE
// ---------TOUR---------

exports.getAllTour = (req, res) => {
    res.status(200).json({
        // status: 'success',
        // requestedAt: req.requestTime,
        // result: tours.length,
        // data: {
        //     tours
        // }
    })
}
exports.getTour = (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find(rs => rs.id === parseInt(id));
    res.status(200).json({
        // status: 'success',
        // data: {
        //     tour
        // }
    })
}
exports.createTour = async(req, res) => {
    try {
        const newTour = await Tour.create(req.body);
        res.status(201).json({
            status: 'true',
            data: {
                tours: newTour
            }
        })
    } catch (error) {
        res.status(201).json({
            status: 'fail',
            message: error
        })
    }

}
exports.updateTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Updated tour here'
    })
}
exports.deleteTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: null
    })
};